document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var controlNumber = document.getElementById('controlNumber').value;
        var nip = document.getElementById('nip').value;
        
        loginUser(controlNumber, nip, function(success) {
            if (success) {
                alert('Login successful');
                window.location.href = 'index.html'; // Redirige al index.html
            } else {
                alert('Login failed');
            }
        });
    });
}

function loginUser(controlNumber, nip, callback) {
    var db = window.sqlitePlugin.openDatabase({name: 'my.db', location: 'default'});
    
    db.transaction(function(tx) {
        // Crear la tabla de usuarios si no existe
        tx.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, controlNumber TEXT, nip TEXT)');
        
        // Aquí deberías insertar usuarios de ejemplo para probar
        // tx.executeSql('INSERT INTO users (controlNumber, nip) VALUES (?, ?)', ['20140189', '1234']);
        
        // Consultar la base de datos para verificar las credenciales
        tx.executeSql('SELECT * FROM users WHERE controlNumber = ? AND nip = ?', [controlNumber, nip], function(tx, resultSet) {
            if (resultSet.rows.length > 0) {
                callback(true); // Login exitoso
            } else {
                callback(false); // Credenciales incorrectas
            }
        });
    }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
        callback(false);
    });
}
